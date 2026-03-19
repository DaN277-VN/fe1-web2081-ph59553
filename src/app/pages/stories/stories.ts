import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: 'One Piece',
      author: 'Eiichiro Oda',
      views: 100000,
      year: 1997,
      genre: 'Adventure',
      imageUrl: 'https://cellphones.com.vn/sforum/wp-content/uploads/2022/06/1-5.jpg',
    },
    {
      title: 'Naruto',
      author: 'Masashi Kishimoto',
      views: 90000,
      year: 1999,
      genre: 'Shounen',
      imageUrl: 'https://bigpicturesb.org/wp-content/uploads/2024/07/anh-nen-naruto-10.jpeg',
    },
    {
      title: 'Doraemon',
      author: 'Fujiko F Fujio',
      views: 70000,
      year: 1969,
      genre: 'Comedy',
      imageUrl: 'https://phunuvietnam.mediacdn.vn/thumb_w/1098/179072216278405120/2025/5/21/image032-1747821414999393226431-0-52-422-727-crop-17478214209682142613757.png',
    },
    {
      title: 'Dragon Ball',
      author: 'Akira Toriyama',
      views: 95000,
      year: 1984,
      genre: 'Action',
      imageUrl: 'https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-6/347786795_155796960807292_3059690283304320469_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeFmUPDOR6VVlg4liqO7hGb7VmdJfenoyCRWZ0l96ejIJNHrA0E2mQkPsibe6CYu1PcsjCOUpMoTebbV3fSoxnTl&_nc_ohc=fZsU4nrqQ7kQ7kNvwGXBeYC&_nc_oc=AdlX4qGP4-Z3cVKqHChGw3GX7l7lvbzUmiZN_fhQgiIdV4fW2s9V3Xg5R7OVqw_3ic4&_nc_zt=23&_nc_ht=scontent.fhan12-1.fna&_nc_gid=gMSgjvhznS5IFkYNj3ScWQ&_nc_ss=8&oh=00_AfzDPx_eWR7n5Wg-uhNAf3GzHdiHlEfbQr2bbgknHM0ksA&oe=69BAB678',
    },
    {
      title: 'Attack On Titan',
      author: 'Hajime Isayama',
      views: 8500000000,
      year: 2009,
      genre: 'Dark Fantasy',
      imageUrl: 'https://www.nxbtre.com.vn/Images/Book/nxbtre_full_25432024_034356.jpg',
    },
    {
      title: 'Bleach',
      author: 'Tite Kubo',
      views: 82000,
      year: 2001,
      genre: 'Supernatural',
      imageUrl: 'https://image.lag.vn/upload/news/24/10/16/462363313_958607412965695_3027747515148954729_n_NSPE.jpg',
    },
  ];
}
