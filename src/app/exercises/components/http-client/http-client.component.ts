import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { lastValueFrom } from 'rxjs'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

@Component({
  selector: 'app-http-client',
  standalone: true,
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.css',
})
export class HttpClientComponent {
  posts: Post[] = []
  posted_post: Post | null = null

  constructor(private readonly httpClient: HttpClient) {}

  async get_posts() {
    const result = await lastValueFrom(this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts'))
    this.posts = result
  }

  async create_post() {
    const new_post: Post = {
      userId: 24,
      id: 123123123,
      title: 'New title',
      body: 'New body',
    }

    this.posted_post = await lastValueFrom(
      this.httpClient.post<Post>('https://jsonplaceholder.typicode.com/posts', new_post),
    )
  }

  async get_error() {
    await lastValueFrom(this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/noexiste'))
  }
}
