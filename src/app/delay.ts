import { Injectable } from "@angular/core";

@Injectable()
export class DelayService{

    ngOnInit() {

    }
    load(): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, 5000))
    }
  
}

