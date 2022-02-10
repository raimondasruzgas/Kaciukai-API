import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagrindinis',
  templateUrl: './pagrindinis.component.html',
  styleUrls: ['./pagrindinis.component.css']
})
export class PagrindinisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  apiNuoroda = "https://kaciuku-api.herokuapp.com/"

  gautasJSON = JSON.stringify(JSON.parse('{ "name": "Tomiukas", "picture": "https://cdn2.thecatapi.com/images/6vq.jpg" }'),null,4)

  nuotrauka = "https://cdn2.thecatapi.com/images/6vq.jpg"

  async gautiKaciuka(){
    let atsIsServerio = await fetch(this.apiNuoroda)
    let kaciukas = await atsIsServerio.json()
    this.nuotrauka = kaciukas.picture
    this.gautasJSON = JSON.stringify(kaciukas,null,4)
  }

}
