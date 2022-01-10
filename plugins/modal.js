function _createModal(options){
    const DEFAULT_WIDTH = '450px'
    const modal = document.createElement('div')
    modal.classList.add('newmodal')
    modal.insertAdjacentHTML('afterbegin',`
        <div class="modal-overlay"> 
            <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
                <div class="modal-header">
                    ${options.closable ? `<span class="modal-close" data-close="true">X</span>` : ''}
                    <span class="modal-title">${options.title || 'Окно'}</span>
                    ${options.closable ? `<span> </span>` : ''}
                </div>
                <div class="modal-body">
                    ${options.content}
                    ${options.api}
                </div> 
                <div class="modal-footer">
                    ${options.closable ? `<span style="color: #f5c518" class="modal-close" data-close="true" data-btn="valueImdb">IMDb</span>` : ''}
                    ${options.closable ? `<span style="color: #007bff" class="modal-close" data-close="true" data-btn="valueShazam">Shazam</span>` : ''}
                    ${options.closable ? `<span style="color: #eb563e" class="modal-close" data-close="true" data-btn="valueWeather">Weather</span>` : ''}
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}
$.modal = function (options) {
    const ANIMATION_SPEED =200
    const $modal = _createModal(options)
    let closing = false
    const modal = {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
    }
    $modal.addEventListener('click', event=> {
        if (event.target.dataset.close){
            modal.close()
        }
    })
    return modal
}