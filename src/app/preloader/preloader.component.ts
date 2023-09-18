import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(()=>{
      let preloader=document.querySelector("#preloader") as HTMLDivElement ;
    preloader.classList.add("isdone");
    },1500)  }

}
