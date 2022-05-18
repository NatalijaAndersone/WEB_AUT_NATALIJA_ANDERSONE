import FormPage from "../../pageObjects/FormPage";

describe('Do Final Task', () => {
  beforeEach(() => {
    FormPage.visit()
  })

  it('Do final task!', () => {

    // Get info from example json file
    cy.fixture("data").then((data) => {

      // Set data
      FormPage.firstName.type(data.firstName);
      FormPage.lastName.type(data.lastName);
      FormPage.email.type(data.email);
      FormPage.genderButton.click({ force: true});
      FormPage.mobileNumber.type(data.mobile);
      FormPage.currentAddress.type(data.currentAddress);

      // Set date of birth fields
      FormPage.dOBField.click();
      FormPage.dOBY.select('1930');
      FormPage.dOBM.select('1');
      FormPage.DOBD.click();

      // Set Subjects as given
      FormPage.subjectsField.type('Economics{enter}');
      FormPage.hobbiesMusic.click({force: true});

      // Upload an image
      FormPage.uploadButton.selectFile("cypress/files/picture.jpg");

      // Set state and city
      FormPage.stateField.click();
      FormPage.stateNCR.click();
      FormPage.cityField.click();
      FormPage.cityDelhi.click();

      // Submit form
      FormPage.submitButton.click();

      // Validate
      FormPage.submitedDataTable.should('contain', data.firstName);
      FormPage.submitedDataTable.should('contain', data.lastName);
      FormPage.submitedDataTable.should('contain', data.email);
      FormPage.submitedDataTable.should('contain', 'Male');
      FormPage.submitedDataTable.should('contain', data.mobile);
      FormPage.submitedDataTable.should('contain', '28 January,1930');
      FormPage.submitedDataTable.should('contain', 'Economics');
      FormPage.submitedDataTable.should('contain', 'Music');
      FormPage.submitedDataTable.should('contain', 'gerard.jpg');
      FormPage.submitedDataTable.should('contain', data.currentAddress);
      FormPage.submitedDataTable.should('contain', 'NCR');
      FormPage.submitedDataTable.should('contain', 'Delhi');

    });});});