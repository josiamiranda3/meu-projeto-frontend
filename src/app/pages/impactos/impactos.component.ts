import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-impactos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './impactos.component.html',
  styleUrl: './impactos.component.css'
})
export class ImpactosComponent implements OnInit {
  private http = inject(HttpClient);

  // URL base do backend hospedado no Render
  private API_BASE_URL = 'https://meu-projeto-backend-k781.onrender.com/api';

  // Ocorrências de espécies ameaçadas
  loading = true;
  erro = false;
  dados: any[] = [];
  mostrarTodos = false;

  // Dados de CO2
  co2Loading = true;
  co2Erro = false;
  co2Dados: any[] = [];

  // Busca personalizada
  especie = '';
  pais = 'BR';
  limite = 10;
  resultadoCustom: any[] = [];
  carregandoCustom = false;
  erroCustom = false;

  ngOnInit(): void {
    // Ocorrências fixas
    this.http.get<any[]>(`${this.API_BASE_URL}/ocorrencias`).subscribe({
      next: (res) => {
        this.dados = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar dados da API:', err);
        this.erro = true;
        this.loading = false;
      }
    });

    // Dados de CO₂
    this.http.get<any[]>(`${this.API_BASE_URL}/co2`).subscribe({
      next: (res) => {
        this.co2Dados = res;
        this.co2Loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar dados de CO₂:', err);
        this.co2Erro = true;
        this.co2Loading = false;
      }
    });
  }

  buscarOcorrenciasPersonalizadas() {
    this.carregandoCustom = true;
    this.erroCustom = false;
    this.resultadoCustom = [];

    const url = `${this.API_BASE_URL}/ocorrencias/custom?scientificName=${this.especie}&country=${this.pais}&limit=${this.limite}`;

    this.http.get<any[]>(url).subscribe({
      next: (res) => {
        this.resultadoCustom = res;
        this.carregandoCustom = false;
      },
      error: (err) => {
        console.error('Erro na busca personalizada:', err);
        this.erroCustom = true;
        this.carregandoCustom = false;
      }
    });
  }
}
