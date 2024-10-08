import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogInfo:BlogInfo[

  ]
constructor(){
this.blogInfo=[
  {
  img:"https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061967.jpg?w=740&t=st=1695142083~exp=1695142683~hmac=d890faef5dec209dac253bbb9e7ce079a00d3f60a571c629e29ddc223f971f66",
  tags:"IT Solution",
  date:"Sep 13, 2023",
  postedBy:"Admin",
  title:"Unlocking the Power of Artificial Intelligence: How AI Can Transform Your Business"
},
  {
    img:"https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-125206.jpg?t=st=1694605818~exp=1694606418~hmac=584e3685105883557e36b8a8bd1007aae5199c4643f2c143f590220ab86ce126",
    tags:"IT Solution",
    date:"Sep 13, 2023",
    postedBy:"Admin",
    title:"Unlocking the Power of Artificial Intelligence: How AI Can Transform Your Business"
},
  {
    img:"https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-125206.jpg?t=st=1694605818~exp=1694606418~hmac=584e3685105883557e36b8a8bd1007aae5199c4643f2c143f590220ab86ce126",
    tags:"IT Solution",
    date:"Sep 13, 2023",
    postedBy:"Admin",
    title:"Unlocking the Power of Artificial Intelligence: How AI Can Transform Your Business"
},
  {
    img:"https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-125206.jpg?t=st=1694605818~exp=1694606418~hmac=584e3685105883557e36b8a8bd1007aae5199c4643f2c143f590220ab86ce126",
    tags:"IT Solution",
    date:"Sep 13, 2023",
    postedBy:"Admin",
    title:"Unlocking the Power of Artificial Intelligence: How AI Can Transform Your Business"
},
  {
    img:"https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-125206.jpg?t=st=1694605818~exp=1694606418~hmac=584e3685105883557e36b8a8bd1007aae5199c4643f2c143f590220ab86ce126",
    tags:"IT Solution",
    date:"Sep 13, 2023",
    postedBy:"Admin",
    title:"Unlocking the Power of Artificial Intelligence: How AI Can Transform Your Business"
},
  {
    img:"https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-125206.jpg?t=st=1694605818~exp=1694606418~hmac=584e3685105883557e36b8a8bd1007aae5199c4643f2c143f590220ab86ce126",
    tags:"IT Solution",
    date:"Sep 13, 2023",
    postedBy:"Admin",
    title:"Unlocking the Power of Artificial Intelligence: How AI Can Transform Your Business"
}
]
}
}

export interface BlogInfo{
  img:string;
  tags:string;
  date:string;
  postedBy:string;
  title:string;
}
