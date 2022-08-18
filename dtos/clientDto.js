module.exports = class ClientDto {
    _id; 
    legal;
    itn;
    address;
    iban;
    bank;
    bic;
    phone;
    noticea;
    noticeb;
    contract;
    contractdate;
    owner

    constructor(model) {
        this._id = model._id
        this.legal = model.legal
        this.itn = model.itn
        this.address = model.address
        this.iban = model.iban
        this.bank = model.bank
        this.bic = model.bic
        this.phone = model.phone
        this.noticea = model.noticea
        this.noticeb = model.noticeb
        this.contract = model.contract
        this.contractdate = model.contractdate
        this.owner = model.owner
    }
}