import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class SimpleAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization || ''; 

    return (token == 'Bearer TokenTest');
  }
}