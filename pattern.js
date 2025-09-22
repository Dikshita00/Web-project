class StartPattern{
    constructor(num){
        this.num=num;
    }
    validate(){
        if(isNaN(this.num)||this.num<1||this.num>5){
            throw new Error('Input nust be a number between 1 and 5');
        }
    }
    printPattern(){
        for(let i=this.num;i>=1;i--){
            let line='';
            for(let j=0;j<i;j++){
                line +='*';
            }
            console.log(line.trim());
        }
    }
}
try{
    const input = Number(ProcessingInstruction.argv[2]);
    const StartPattern=new StartPattern(input);
    StartPattern.validate();
    StartPattern.printPattern();
}catch(error){
    console.error(`Error: ${error.message}`);
}