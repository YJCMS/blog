import { Controller, Param, Body, Delete, Get, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('blog')
export class BoardController {
  boardService: BoardService;
  constructor() {
    this.boardService = new BoardService(); // 생성자에서 블로그 서비스 생성
  }

  @Get()
  getAllPost() {
    console.log('모든 게시물 가져오기');
    return this.boardService.getAllPosts;
  }

  @Post()
  createPost(@Body() postDto) {
    console.log('게시물 작성');
    this.boardService.createPost(postDto);
    return 'success';
  } 

  @Get('/:id')
  getPost(@Param('id') id: string) {
    console.log('[id: ${id}] 게시글 하나 가져오기');
    return this.boardService.getPost(id);
  }

  @Delete('/:id')
  deletePost(@Param('id') id: string) {
    console.log('게시글 삭제');
    this.boardService.delete(id);
    return 'success';
  }

  @Put('/:id')
  updatePost(@Param('id') id: string, @Body() postDto) {
    console.log('게시글 업데이트',id, postDto);
    return this.boardService.updatePost(id, postDto);
  }
}
