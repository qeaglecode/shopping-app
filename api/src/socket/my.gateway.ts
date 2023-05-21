import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class myGateway {
  @SubscribeMessage('my-event')
  handleMyEvent(client: Socket, payload: any): void {
    console.log(payload);
    client.emit('my-event-response', 'Hello from server');
  }
}
