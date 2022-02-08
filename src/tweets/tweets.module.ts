import { Tweet, TweetSchema } from './schemas/tweet.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Tweet.name, schema: TweetSchema}
    ])
  ],
  controllers: [TweetsController],
  providers: [TweetsService]
})
export class TweetsModule {}
