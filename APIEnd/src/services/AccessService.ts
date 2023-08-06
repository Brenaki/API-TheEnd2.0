const en = [
    {
        how: 'How?', //  How to access to The End?
        language: 'en',
        access: `To reach the End, the player needs to find a stronghold using eyes of ender and locate the portal room. 
        The room has an End portal with 12 frames, some with eyes already inserted. The player needs 
        to complete the portal with any remaining ender eyes. When activating the portal, a loud sound is 
        emitted and the portal replaces the center blocks with End portal blocks. The player can enter the
        portal to go to the End, along with other entities that were teleported before.`
    }
]
const pt = [
    {
        how: 'Como?', // Como você acessa o Fim? 
        language: 'pt',
        acesso: `Para chegar ao End, o jogador precisa encontrar uma fortaleza usando olhos de ender e
        localizar a sala do portal. A sala tem um portal do End com 12 molduras, algumas com olhos já
        inseridos. O jogador precisa completar o portal com olhos de ender restantes. Ao ativar o
        portal, um som alto é emitido e o portal substitui os blocos centrais por blocos de portal do
        End. O jogador pode entrar no portal para ir ao End, junto com outras entidades que foram
        teleportadas antes.`
    }
]

export class AccessService {
    updateAccess = (language: string, description: string) =>{
        // Add the access in English
        if (language === 'en'){
            const access = {
                how: 'How?',
                language: 'en',
                access: description
            }
            en.push(access)
            console.log('Updated access in English')
        }

        // Add the access in Portuguese
        if (language === 'pt'){
            const access = {
                how: 'Como?',
                language: 'pt',
                acesso: description
            }
            pt.push(access)
            console.log('Updated access in Portuguese')
        }
    
    }

    getAccessEN = () => {
        return en
    }
    
    getAccessPT = () => {
        return pt
    }

    getAccessAll = () => {
        return { en , pt }
    }


}