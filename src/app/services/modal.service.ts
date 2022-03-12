import { Injectable } from '@angular/core';

interface IModal {
  id: String,
  visible: Boolean
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}

  register(id: String) {
    this.modals.push({
      id,
      visible: false
    })
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find(element => element.id === id)?.visible;
  }

  toggleModal(id: string) {
    const modal = this.modals.find(element => element.id === id)

    if(modal) {
      modal.visible = !modal.visible
    }
  }
}
