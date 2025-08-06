<input class="input" placeholder="Enter name" />
<input class="input-outline" placeholder="Enter name" />

<br />
<p>sizes</p>

<input class="input-outline-sm" placeholder="Enter name" />
<input class="input-outline-md" disabled placeholder="Enter name" />
<input class="input-lg" placeholder="Enter name" />
<input class="input-outline-xl" placeholder="Enter name" />

<p>Icons</p>

<div class="grid-(~ cols-2 gap5)">
  <div class="grinput">
    <i class="i-ri:user-line"></i>
    <input placeholder="Enter name" />
  </div>

  <div class="grinput-outline">
    <i class="i-line-md:email-filled"></i>
    <input placeholder="Enter name" />
  </div>

  <div class="grinput p0">
    <span class="bg-border p2 px3 rounded-l">$</span>
    <input placeholder="Enter price" type="number" />
  </div>

  <div class="grinput p0">
    <span class="bg-border p2 px3 rounded-l">$</span>
    <input placeholder="Enter salary" disabled />
  </div>

  <div class="grinput-outline p0 col-span-2">
    <span class="bg-muted p2 px3 rounded-l">$</span>
    <input placeholder="Enter name" />
    <span class="bg-muted p2 rounded-r">USD</span>
  </div>
</div>
