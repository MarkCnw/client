import { Component, input, OnInit } from '@angular/core'
import { Message } from '../../../_models/message'
import { User } from '../../../_models/user'

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit {

  sender = input.required<User>()
  recipient = input.required<User>()
  message = input.required<Message>()
  previousMessageSendData = input.required<Date | undefined>()

  isMessageFromSerder = true
  messageStyle: MessageStyle = 'right'
  avatar = ''
  messageDate = ''
  readAt = 'unread'

  ngOnInit(): void {
    this.isMessageFromSerder = this.sender().id === this.message().sender
    if (this.isMessageFromSerder) {
      this.avatar = this.sender().avatar!
    } else {
      this.avatar = this.recipient().avatar!
      this.messageStyle = 'left'
    }
  }

  isDateSamePreviousMessageSenData(): boolean {
    const date1 = new Date(this.message().created_at!.toString())
    this.messageDate = date1.toLocaleDateString()

    if (!this.previousMessageSendData()) return false

    const date2 = new Date(this.previousMessageSendData.toString())

    const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate())
    const d2 = new Date(date2.getFullYear(), date1.getMonth(), date2.getDate())

    return d1.getTime() === d2.getTime()
  }
}

type MessageStyle = 'left' | 'right'
