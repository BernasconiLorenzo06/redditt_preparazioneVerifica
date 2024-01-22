import { Component ,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nuovo',
  templateUrl: './nuovo.component.html',
  styleUrls: ['./nuovo.component.css']
})
export class NuovoComponent implements OnInit{
  @Input() testo: string;
  constructor(){

  }
  ngOnInit(): void {
    
  }
}
