import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinopsis',
  templateUrl: './sinopsis.component.html',
  styleUrls: ['./sinopsis.component.css']
})
export class SinopsisComponent implements OnInit {

  aotImageUrl = '../assets/aot.jpg';
  mokImageUrl = '../assets/mok.jpg';
  friendsImageUrl = '../assets/friends.jpg';
  jjkImageUrl = '../assets/jjk.jpg';
  twdImageUrl = '../assets/twd.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
