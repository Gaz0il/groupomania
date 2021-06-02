import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
 public posts!: Post[];
 

  constructor(private postServcie:PostService){}

  ngOnInit() {return this.postServcie.getPost().subscribe(data=>this.posts=data);
    
    
  }

}
