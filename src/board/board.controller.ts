import { Controller, Param, Body, Delete, Get, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';


@Controller('board')
export class BoardController {
  constructor(private boardService : BoardService) {
    //this.boardService = new BoardService(); // 해당 코드 생략( 위 접근자를 이용해서 construct에 넣어줌)
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

