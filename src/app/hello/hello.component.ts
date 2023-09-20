import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from '../Services/endereco.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  constructor(private route: Router, private endereco: EnderecoService) {}

 @Input() name: string = 'Turma'

 count: number = 0

 isVisible: boolean = true

 nome: string = ''

 list: any[] = [
  {name: "Jorge"},
  {name: "Carlos"},
  {name: "Arts"}
]

enderecoAchado: any = {}
 
mudarRota(): void 
{
  this.route.navigate(['/rota'])
}

clicked(): void 
{
  window.alert('Voce clicou!')
}

increment(): void
{
  this.count += this.count < 10 ? 1 : 0
}

decrement(): void 
{
  this.count -= this.count > 0 ? 1 : 0
}

submit(): void 
{
  console.log(this.nome)
}

buscarEndereco()
{
  this.endereco.getEndereco('14090150').subscribe({
    next: (response) => {
      console.log(response.localidade)
    },
    error(err)
    {
      console.log(err)
    }
  })
}

}
