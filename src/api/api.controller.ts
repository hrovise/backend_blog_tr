import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Status')
@Controller('api_entry')
export class ApiController {

    
     @Get('status') // GET /api/status
      @ApiOperation({ summary: 'Проверка статуса сервера' })
    @ApiResponse({ 
    status: 200, 
    description: 'Сервер работает', 
    schema: { example: { status: 'ok', message: 'Backend is running!' } } 
     })
  getStatus() {
    return { status: 'ok', message: 'Backend is running!' };
  }
   

  @Get('hello') // GET /api/hello
  @ApiOperation({ summary: 'Привет от сервера' })
  @ApiResponse({ 
    status: 200, 
    description: 'Возврат приветствия', 
    schema: { example: { status: 'ok', message: 'Привет от сервера' } } 
     })
  getHello() {
    return { message: 'Hello from backend!' };
  }
}
