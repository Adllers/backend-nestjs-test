import { MailList } from './schemas/mail-list.schema';
import { MailListService } from './mail-list.service';
import { Job } from 'bull';
import { Process, Processor } from '@nestjs/bull';

//conexão com kafka
@Processor('emails')
export class SendMailTweetsJob {
  constructor(private mailListService: MailListService) {}

  @Process()
  async handle(job: Job) {
    const mailList = await this.mailListService.findOne();
    console.log(mailList.emails);
    console.log('kafka para enviar a mensagem');
  }
}
