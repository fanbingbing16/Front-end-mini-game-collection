import { Component, Directive, OnInit, QueryList, ViewChildren, OnChanges, Input, DoCheck, InjectionToken } from '@angular/core';
interface Data {
  id: number
}

@Directive({ selector: 'child-directive' })
class ChildDirective {
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck {
  title = 'my';
  data = [{ id: 0 }, { id: 1 }, { id: 2 }]
  @ViewChildren('row') row!: QueryList<any>;
  // @Input() count: number = 0;
  count = 0
  isWin = false
  winText: Array<string> = []
  nextText = '0'
  search = false
  APP_Id?: InjectionToken<string>
  id = this.APP_Id + '1'
  ngOnInit() {
    console.log(2333, 'init',this.id);

  }
  ngDoCheck() {
    if (this.row && this.count >= 3 && !this.isWin) {
      this.row.forEach((item, index, arr) => {
        if ((index === 0 || index % 3 === 0) && item.nativeElement.innerText !== '') {
          if (item.nativeElement.innerText === arr[index + 1].nativeElement.innerText && item.nativeElement.innerText === arr[index + 2].nativeElement.innerText) {
            this.isWin = true
            this.winText.push(item.nativeElement.innerText)
            alert(`${this.winText.slice(-1)}赢了`)
          }
        }
        if ((index === 0 || index === 1 || index === 2) && item.nativeElement.innerText !== '') {
          if (item.nativeElement.innerText === arr[index + 3].nativeElement.innerText && item.nativeElement.innerText === arr[index + 6].nativeElement.innerText) {
            this.isWin = true
            this.winText.push(item.nativeElement.innerText)
            alert(`${this.winText.slice(-1)}赢了`)
          }
        }
        if ((index === 0) && item.nativeElement.innerText !== '') {
          console.log(123, item.nativeElement.innerText, index);

          if (item.nativeElement.innerText === arr[index + 4].nativeElement.innerText && item.nativeElement.innerText === arr[index + 8].nativeElement.innerText) {
            this.isWin = true
            this.winText.push(item.nativeElement.innerText)
            alert(`${this.winText.slice(-1)}赢了`)
          }
        }
        if ((index === 2) && item.nativeElement.innerText !== '') {
          if (item.nativeElement.innerText === arr[index + 2].nativeElement.innerText && item.nativeElement.innerText === arr[index + 4].nativeElement.innerText) {
            this.isWin = true
            this.winText.push(item.nativeElement.innerText)
            alert(`${this.winText.slice(-1)}赢了`)
          }
        }
      })
    }
    if (this.count >= 9 && !this.isWin) {
      alert('这一局平局')
      this.winText.push('没有选手')
      this.nextAgin()
    }
  }
  nextAgin() {
    this.row.forEach((item) => {
      item.nativeElement.innerHTML = ''

    })
    this.count = 0
    this.isWin = false
    this.nextText = '0'
  }
  returnAgin() {
    this.search = false
    this.nextAgin()
  }
  searchText() {
    this.search = true
  }
  clickData(i: Data, j: Data) {

    if (this.isWin) return
    if (this.count > 9) return
    if (this.row.get(i.id * 3 + j.id).nativeElement.innerText === '') {
      this.count++
      if (this.count % 2 === 0 || this.count === 0) {
        this.row.get(i.id * 3 + j.id).nativeElement.innerHTML = '<div style="text-align:center;">#</div>'
        this.nextText = '0'
      } else {
        this.row.get(i.id * 3 + j.id).nativeElement.innerHTML = '<div style="text-align:center;">0</div>'
        this.nextText = '#'
      }
    }

  }
}
