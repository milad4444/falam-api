import { Module } from '@nestjs/common';
import { SubscribesController } from './subscribes.controller';

@Module({
  controllers: [SubscribesController]
})
export class SubscribesModule {}
