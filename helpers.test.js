
it('should give sum of all dollar amounts when sumPaymentTotal is called', function(){
  
  tipAmtInput.value = 40;
  billAmtInput.value = 100;
 
  expect(() => sumPaymentTotal('tipAmt').toEqual(40));
  expect(() => sumPaymentTotal('billAmt').toEqual(100));
  
})


it('should convert the bill amount and tip to a percentage using calculateTipPercent', function(){
 
  expect(() => calculateTipPercent(100, 14).toEqual(14));
  expect(() => calculateTipPercent(100, 10).toEqual(10));
  
})

// // expects a table row element, appends a newly created td element from the value
// function appendTd(tr, value) {
//   let newTd = document.createElement('td');
//   newTd.innerText = value;

//   tr.append(newTd);
// }

it('generates a new td and appends it to tr using appendTd(tr, value)', function(){
  let trElement = document.createElement('tr');

  appendTd(trElement, 'testing');

  expect(trElement.children.length).toEqual(1);
  expect(trElement.firstChild.innerHTML).toEqual('testing');

});

//Step Three

it('following step three instructions', function(){
  let trElement = document.createElement('tr');

  appendDeleteBtn(trElement);
  expect(trElement.children.length).toEqual(1);
  expect(trElement.firstChild.innerHTML).toEqual('x');


})

afterEach(function() {
  tipAmtInput.value = '';
  billAmtInput.value ='';

});