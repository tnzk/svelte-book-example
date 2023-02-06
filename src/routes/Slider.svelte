<script>
  /**
   * @type {string | any[]}
   */
   export let images;

  let centerIndex = 0;
  let leftIndex = images.length - 1;
  let rightIndex = 1;

  function moveLeft() {
    /**
     * @type {number}
     */
    const length = images.length;
    centerIndex = (centerIndex - 1 + length) % length;
    leftIndex = (centerIndex - 1 + length) % length;
    rightIndex = (centerIndex + 1) % length;
  }

  function moveRight() {
    const length = images.length;
    centerIndex = (centerIndex + 1) % length;
    leftIndex = (centerIndex - 1 + length) % length;
    rightIndex = (centerIndex + 1) % length;
  }
</script>

<div class="slider">
  <img src={images[leftIndex]} alt="" class="slider-item left" />
  <img src={images[centerIndex]} alt="" class="slider-item" />
  <img src={images[rightIndex]} alt="" class="slider-item right" />
  <button class="slider-left-button" on:click={moveLeft}>←</button>
  <button class="slider-right-button" on:click={moveRight}>→</button>
</div>

<style>
  .slider {
    position: relative;
    width: 80%;
    margin: 0 10%;
  }

  .slider-item {
    width: 100%;
  }

  .slider-item.left {
    position: absolute;
    top: 0;
    right: 100%;
  }

  .slider-item.right {
    position: absolute;
    top: 0;
    left: 100%;
  }

  .slider-left-button {
    position: absolute;
    top: 50%;
    right: 100%;
  }

  .slider-right-button {
    position: absolute;
    top: 50%;
    left: 100%;
  }
</style>