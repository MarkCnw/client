// import { Component, inject, OnInit, WritableSignal } from '@angular/core'
// import { environment } from '../../environments/environment'
// import { HttpClient } from '@angular/common/http'
// import { PageEvent, MatPaginatorModule } from '@angular/material/paginator'
// import { MemberService } from '../_services/member.service'
// import { default_pageSizeOption, default_paginator, Paginator, UserQueryPagination } from '../_models/pagination'
// import { User } from '../_models/user'
// import { MatExpansionModule } from '@angular/material/expansion'
// import { FormsModule } from '@angular/forms'
// import { MatInputModule } from '@angular/material/input'
// import { MatFormFieldModule } from '@angular/material/form-field'
// import { MatButtonModule } from '@angular/material/button'
// import { MatSelectModule } from '@angular/material/select'
// import { MatIconModule } from '@angular/material/icon'
// import { MemberCardComponent } from './member-card/member-card.component'

// @Component({
//     selector: 'app-member',
//     imports: [MatPaginatorModule, MatExpansionModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatIconModule, MemberCardComponent],
//     templateUrl: './member.component.html',
//     styleUrl: './member.component.scss'
// })
// export class MemberComponent implements OnInit {
//     private memberService = inject(MemberService)
//     paginator: WritableSignal<Paginator<UserQueryPagination, User>>
//     pageSize = default_pageSizeOption

//     constructor() {
//         this.paginator = this.memberService.paginator
//     }
//     ngOnInit(): void {
//         this.memberService.getMembers()
//     }
//     onPageChange(event: PageEvent) {
//         const copypaginator = this.paginator()
//         copypaginator.pagination.currentPage = event.pageIndex + 1
//         copypaginator.pagination.pageSize = event.pageSize
//         this.paginator.set(copypaginator)

//         this.onSearch()
//     }


//     onSearch() {
//         this.memberService.getMembers()
//     }

//     onResetsearch() {
//         this.paginator.set(default_paginator)
//         this.onSearch()
//     }
// }





import { Component, inject, OnInit, WritableSignal } from '@angular/core'
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator'

import { default_pageSizeOption, default_paginator, Paginator, UserQueryPagination } from '../_models/pagination'
import { User } from '../_models/user'
import { MatExpansionModule } from '@angular/material/expansion'
import { FormsModule } from '@angular/forms'
import { MatFormField, MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon'
import { MemberCardComponent } from './member-card/member-card.component'
import { MemberService } from '../_services/member.service'
@Component({
    selector: 'app-member',
    imports: [MatPaginatorModule, MatExpansionModule, FormsModule, MatInputModule, MatFormField, MatButtonModule, MatSelectModule, MatIconModule, MemberCardComponent],
    templateUrl: './member.component.html',
    styleUrl: './member.component.scss'
})
export class MemberComponent implements OnInit {
    private memberService = inject(MemberService)
    paginator: WritableSignal<Paginator<UserQueryPagination, User>> = this.memberService.paginator
    pageSize = default_pageSizeOption

    constructor() {
        this.paginator = this.memberService.paginator
    }
    ngOnInit(): void {
        this.memberService.getMembers()
    }

    onPageChange(event: PageEvent) {
        const copyPagination = this.paginator().pagination
        copyPagination.currentPage = event.pageIndex + 1
        copyPagination.pageSize = event.pageSize

        this.onSearch()
    }

    onSearch() {
        this.memberService.getMembers()
    }

    onResetSearch() {
        this.paginator.set(default_paginator)
        this.onSearch()
    }

}