import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  flash({ detail: { content } }) {
    console.log("effects: " + content)
  }
}
