import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';  // importando o httpclient
import { RouterLink } from '@angular/router'; //importando router link
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApiService } from '../services/api.service'; // importando serviço da api
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';

interface Produto { // criando interface para os produtos
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, CommonModule, FormsModule, RouterLink],
})

export class HomePage {
  public produtos: Produto[] = [];
  private apiUrl = 'https://fakestoreapi.com'
  constructor(private api: ApiService) {}
  ngOnInit(){
    this.api.get<Produto[]>('/products').subscribe({
      next: (response) => {
        this.produtos = response
        console.log('Produtos carregados!', this.produtos);
      },
      error: (error) =>{
        console.log('Erro:', error)
      }
    })
  }

}



//  constructor(private http: HttpClient) {}
  // ngOnInit(){ // pra carregar quando a pagina iniciar
  //   this.http.get<any[]>(`${this.apiUrl}/products`).subscribe({
  //     next: (response) => {
  //       this.produtos = response;
  //       console.log(response) // tirando pra ver os produtos que já sõa pré-criados.
  //       console.log('ok')
  //     },
  //    error: (error) => {
  //     console.error("Erro", error);
  //     }
  //    }
  //   )
  // // 

