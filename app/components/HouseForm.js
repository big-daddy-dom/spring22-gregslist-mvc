export function getHouseform() {
  return /*html*/ `
  <form onsubmit="app.housesController.addHouse()">
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="rooms" class="form-label">Rooms</label>
        <input type="text" class="form-control" name="rooms" id="rooms" aria-describedby="make"
          placeholder="Rooms..." required>
      </div>
      <div>
        <label for="sqfootage" class="form-label">Square Feet</label>
        <input type="text" class="form-control" name="sqfootage" id="sqfootage" aria-describedby="sqfootage"
          placeholder="Square Feet..." required>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="yearbuilt" class="form-label">Year Built</label>
        <input type="number" class="form-control" name="yearbuilt" id="yearbuilt" aria-describedby="yearbuilt"
          placeholder="Year Built..." min="1950" max="2022" required>
      </div>
      <div>
        <label for="color" class="form-label">Color</label>
        <input type="color" class="form-control" name="color" id="color" aria-describedby="color" required>
      </div>
      <div>
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
          placeholder="Price..." min='1' required>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="img" class="form-label">Image Url</label>
        <input type="url" class="form-control" name="img" id="img" aria-describedby="img"
          placeholder="Image Url..." required>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="description" class="form-label">Description</label>
        <textarea type="text" class="form-control" name="description" id="description"
          aria-describedby="description" placeholder="Description..." min="5" max="250" required> </textarea>
      </div>
    </div>
    
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">Create</button>
    </div>
  </form>`;
}
