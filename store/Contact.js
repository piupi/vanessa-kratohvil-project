export default {
  heading: "Contact Page",
  main: `<main id="pls-center">
  <form action="#" method="POST" data-netlify="true">
    <div class="flex-container--desktop flex-row--desktop">
      <div>
        <label for="name">Name:</label>
        <input class="is-error" type="text" id="name" name="name">
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone">
      </div>
    </div>

      <div id="msgbox">
          <label for="msg">Enter your message:</label>
          <textarea name="msg" id="msg" cols="20" rows="10"></textarea>
      </div>
      <input type="submit" value="Submit" id="submit">
  </form>
</main>`
}
