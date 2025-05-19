import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required],
      voluntario: [false]
    });
  }

  get t() {
    return this.form.controls;
  }

  tocou(campo: keyof typeof this.t) {
    return this.t[campo].touched;
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Mensagem enviada:', this.form.value);
      alert('Mensagem enviada com sucesso!');
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
