import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["source"]
  static classes = ["supported"]

  connect() {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted") {
        this.element.classList.add(this.supportedClass)
      }
    })
  }

  copy(event) {
    event.preventDefault()
    this.dispatch("copy", { detail: { content: this.sourceTarget.value} })
    // this.sourceTarget.select()
    // document.execCommand("copy")
    navigator.clipboard.writeText(this.sourceTarget.value)
  }
}
