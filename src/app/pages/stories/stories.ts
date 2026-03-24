import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Story } from '../../models/story';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories implements OnInit {
  stories: Story[] = [
    {
      id: 1,
      title: 'One Piece',
      author: 'Eiichiro Oda',
      views: 100000,
      year: 1997,
      genre: 'Adventure',
      imageUrl: 'https://cellphones.com.vn/sforum/wp-content/uploads/2022/06/1-5.jpg',
    },
    {
      id: 2,
      title: 'Naruto',
      author: 'Masashi Kishimoto',
      views: 90000,
      year: 1999,
      genre: 'Shounen',
      imageUrl: 'https://bigpicturesb.org/wp-content/uploads/2024/07/anh-nen-naruto-10.jpeg',
    },
    {
      id: 3,
      title: 'Doraemon',
      author: 'Fujiko F Fujio',
      views: 70000,
      year: 1969,
      genre: 'Comedy',
      imageUrl: 'https://phunuvietnam.mediacdn.vn/thumb_w/1098/179072216278405120/2025/5/21/image032-1747821414999393226431-0-52-422-727-crop-17478214209682142613757.png',
    },
    {
      id: 4,
      title: 'Dragon Ball',
      author: 'Akira Toriyama',
      views: 95000,
      year: 1984,
      genre: 'Action',
      imageUrl: 'https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-6/347786795_155796960807292_3059690283304320469_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeFmUPDOR6VVlg4liqO7hGb7VmdJfenoyCRWZ0l96ejIJNHrA0E2mQkPsibe6CYu1PcsjCOUpMoTebbV3fSoxnTl&_nc_ohc=fZsU4nrqQ7kQ7kNvwGXBeYC&_nc_oc=AdlX4qGP4-Z3cVKqHChGw3GX7l7lvbzUmiZN_fhQgiIdV4fW2s9V3Xg5R7OVqw_3ic4&_nc_zt=23&_nc_ht=scontent.fhan12-1.fna&_nc_gid=gMSgjvhznS5IFkYNj3ScWQ&_nc_ss=8&oh=00_AfzDPx_eWR7n5Wg-uhNAf3GzHdiHlEfbQr2bbgknHM0ksA&oe=69BAB678',
    },
    {
      id: 5,
      title: 'Attack On Titan',
      author: 'Hajime Isayama',
      views: 8500000000,
      year: 2009,
      genre: 'Dark Fantasy',
      imageUrl: 'https://www.nxbtre.com.vn/Images/Book/nxbtre_full_25432024_034356.jpg',
    },
    {
      id: 6,
      title: 'Bleach',
      author: 'Tite Kubo',
      views: 82000,
      year: 2001,
      genre: 'Supernatural',
      imageUrl: 'https://image.lag.vn/upload/news/24/10/16/462363313_958607412965695_3027747515148954729_n_NSPE.jpg',
    },
  ];
  loading = false;
  error = '';
  deleteInProgress: number | null = null;

  constructor(private storyService: StoryService) {}

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.loading = true;
    this.error = '';

    this.storyService.getAll().subscribe({
      next: (data: any) => {
        this.loading = false;
        this.stories = data;
      },
      error: () => {
        this.loading = false;
        this.error = 'Không thể tải dữ liệu';
      },
    });
  }

  deleteStory(id: number) {
    const confirmDelete = confirm('Bạn có chắc muốn xóa không?');
    if (!confirmDelete) return;

    this.deleteInProgress = id;

    this.storyService.delete(id.toString()).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id !== id);
        this.deleteInProgress = null;
        alert('Xóa thành công');
      },
      error: () => {
        this.deleteInProgress = null;
        alert('Xóa thất bại');
      },
    });
  }
}
