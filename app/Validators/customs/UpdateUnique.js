const Validator = use('Validator')
const Database = use('Database')
const existsFn = async (data, field, message, args, get) => {
    const value = get(data, field)
    const [table, column] = args
    const row = await Database.table(table).where(column, value).first()
    console.log(row)
    if (row) {
        throw 'Já possui um CARALHO com esse título, por favor, escolha outro'
    }
}

Validator.extend('uniqueUpdate', existsFn)