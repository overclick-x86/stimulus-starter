import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["source"]
  
  copy(event) {
    event.preventDefault()
    this.dispatch("copy", { detail: { content: this.sourceTarget.value} })
    this.sourceTarget.select()
    navigator.clipboard.writeText(this.sourceTarget.value)
    console.log("clipboard-2: " + this.sourceTarget.value)
  }
}
