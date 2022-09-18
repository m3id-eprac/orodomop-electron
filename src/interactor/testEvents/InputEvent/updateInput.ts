import ipcMainHandle from "src/interactor/utils/mainHandle"
import passRealm from "src/data/passInputRlm"

const updateInput = ipcMainHandle('updateInput', async (arg: string) => {
    const rlm = await passRealm()
    rlm.update(arg)

    return 'ok'
})
export default updateInput

