<h2>CatPhotoApp</h2>
<main>
    <p>Click here to view more <a href="#">cat photos</a>.</p>

    <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
                     alt="A cute orange cat lying on its back."></a>

    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://www.freecatphotoapp.com/submit-cat-photo">
        <label htmlFor="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
        <label htmlFor="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
        <label htmlFor="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
        <label htmlFor="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
        <label htmlFor="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
        <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
    </form>
</main>