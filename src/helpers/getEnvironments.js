
export const getEnvironments = () => {

    const envData = import.meta.env ?? process.env.SOME_ENV_VARIABLE ;

    return{
        ...envData
    }
}