<h2>CatPhotoApp</h2>
<main>
    <p>Click here to view more <a href="#">cat photos</a>.</p>

    <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
                     alt="A cute orange cat lying on its back."></a>
    <div>
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
    </div>
    <form action="https://www.freecatphotoapp.com/submit-cat-photo">
        <label htmlFor="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"
                                       checked> Indoor</label>
        <label htmlFor="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
        <label htmlFor="loving"><input id="loving" type="checkbox" name="personality" value="loving"
                                       checked> Loving</label>
        <label htmlFor="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
        <label htmlFor="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
        <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
    </form>
</main>