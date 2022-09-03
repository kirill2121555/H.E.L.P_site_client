import React from "react";
import Qrcode from "./qrcode";

const Share = (props) => {
     return (
          <div>
               <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         ...
                    </button>
                    <ul class="dropdown-menu">
                         <li><a class="dropdown-item" onClick={() => { navigator.clipboard.writeText(props.props[0]) }}>Копировать ссылку</a></li>
                         <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Qr код</a></li>
                    </ul>
               </div>

               <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" >
                         <div class="modal-content">
                              <div class="modal-header">
                                   <h5 class="modal-title" id="exampleModalLabel">Qr Код</h5>
                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                   <Qrcode props={props.props[1]} />
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     )

}

export default Share

