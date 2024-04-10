import React from "react";
import './assets/style.css'

export default function Slidex() {
    
    return(
        <>
    <header>
        <nav>
            <a href="">Home</a>
            <a href="">Book game</a>
            <a href="">Tournaments</a>
            <a href="">Coaching offers</a>
            <a href="">Contacts</a>
        </nav>
    </header>

    <div class="carousel">
        <div class="list">
            <div class="item">
                <img src="https://images.pexels.com/photos/9153468/pexels-photo-9153468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div class="content" >
                    <div class="author">LUNDEV</div>
                    <div class="title">ALMORA STADIUM</div>
                    <div class="topic">UTTRAKHAND</div>
                    <div class="des">
                    
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div class="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div class="content" >
                    <div class="author">LUNDEV</div>
                    <div class="title">DESIGN SLIDER</div>
                    <div class="topic">ANIMAL</div>
                    <div class="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div class="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="https://images.pexels.com/photos/1190295/pexels-photo-1190295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div class="content">
                    <div class="author">LUNDEV</div>
                    <div class="title">DESIGN SLIDER</div>
                    <div class="topic">ANIMAL</div>
                    <div class="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div class="buttons">
                        <button class="see">SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="https://images.pexels.com/photos/2966245/pexels-photo-2966245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div class="content">
                    <div class="author">LUNDEV</div>
                    <div class="title">DESIGN SLIDER</div>
                    <div class="topic">ANIMAL</div>
                    <div class="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div class="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="thumbnail">
            <div class="item">
                <img src="https://images.pexels.com/photos/9153468/pexels-photo-9153468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div class="content">
                    <div class="title">
                        Doon Sports Club
                    </div>
                    <div class="description">
                        Description
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div class="content">
                    <div class="title">
                        Stevenson Stadium
                    </div>
                    <div class="description">
                        Description
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="https://images.pexels.com/photos/1190295/pexels-photo-1190295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div class="content">
                    <div class="title">
                        Srikot Stadium
                    </div>
                    <div class="description">
                        Description
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="https://images.pexels.com/photos/2966245/pexels-photo-2966245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div class="content">
                    <div class="title">
                        Al Mera Stadium
                    </div>
                    <div class="description">
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="arrows">
            <button id="prev">prev</button>
            <button id="next">next</button>
        </div>
        <div class="time"></div>
    </div>
    </>
    )
}