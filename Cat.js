
class Cat {
    constructor(data){
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getCatHtml() {
        const { name, avatar, age, bio } = this
        return `
        <div class="suggestion">
            <img id="like-badge" class="like-badge hidden" src="images/badge-like.png" alt="like image">
            <img id="dislike-badge" class="like-badge hidden" src="images/badge-nope.png" alt="like image">
            <div class="cat-info">
                <h4>${name}, ${age}</h4>
                <div class="cat-bio">
                    ${bio}
                </div>
            </div>
            <img class="cat-img" src="${avatar}" alt="cat image">
        </div>`
    }
}

export default Cat