<div class="flex brd p20 gap5 rounded-xl justify-center">
  <div
    class="[&>*:nth-child(even)]:ml3 gap-(x3 y7) grid-(~ cols-[auto_1fr]) items-center"
  >
    <input
      type="radio"
      id="email"
      name="x"
      class="radio"
      defaultChecked
    />
    <label for="email">Email notifications</label>

    <input type="radio" id="sms" name="x" class="radio-blue" />
    <div>
      <label for="sms">SMS notifications</label><br />
      <span class="text-(mutedfg sm)"
      >Standard messaging rates may apply</span>
    </div>

    <input type="radio" id="none" name="x" class="radio-slate" />
    <label for="none">No notifications</label>

    <input type="radio" id="disagree" name="x" class="radio-red" />
    <label for="disagree">Stop Bothering!</label>
  </div>
</div>
