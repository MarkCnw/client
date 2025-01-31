import { HttpClient } from '@angular/common/http'
import { Component, computed, inject, Signal } from '@angular/core'
import { environment } from '../../environments/environment'
import { AccountService } from '../_services/account.service'
import { User } from '../_models/user'
import { MemberComponent } from '../member/member.component'

@Component({
  selector: 'app-home',
  imports: [MemberComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private accountService = inject(AccountService)
  user: Signal<User | any>

  constructor() {
    this.user = computed(() => this.accountService.data()?.user)
  }

}

