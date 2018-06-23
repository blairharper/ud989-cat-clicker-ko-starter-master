var viewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    
    this.catLevel = ko.computed(function() {
        if (this.clickCount() < 10) {
            return "Newborn";
        }

        if (this.clickCount() < 110) {
            return "Infant";
        }

        if (this.clickCount() < 160) {
            return "Teen";
        } else {
            return "Adult";
        }
    }, this);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() +1);
    };


}

ko.applyBindings(new viewModel());