var dateTime = new GlideDateTime();
var currentDate = dateTime.getLocalDate();
var grSA = new GlideRecord('sysapproval_approver');
grSA.addEncodedQuery("state=requested^source_table=sc_req_item"); //Add your own query here alongside with the date conditions.
grSA.query();
while (grSA.next()) {        
             gs.eventQueue('event.name', grSA); //Add your own event name to trigger the notification.
}
