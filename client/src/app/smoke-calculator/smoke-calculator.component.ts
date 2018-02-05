import { Component, OnInit,Output, Input, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-smoke-calculator',
  templateUrl: './smoke-calculator.component.html',
  styleUrls: ['./smoke-calculator.component.css']
})
export class SmokeCalculatorComponent implements OnInit {

  @Input() smokedSigaretsSize;
  @Output() smokedSigaretsChanges = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    $('.btn-smoke').click(function () {
      $('.mouth').animate({
        height: "20px"
      }, 400);
      $('.burn').show();
      $('.tobacco').animate({
        width: "20px"
      }, 1800, function () {
        $('.burn').css("background-color", "#999");
      });
      $('.smokeflow1').animate({
        left: "109px"
      }, 1000, function () {
        $('.smokeflow1').animate({
          width: "0"
        }, 1000);
        $('.smokeflow2').animate({
          height: "136px"
        }, 1000, function () {
          $('.smokeflow2').animate({
            top: "265px",
            height: 0
          }, 700);
          $('.smokeflow3').animate({
            width: "30px"
          }, 1000, function() {
            $('.smokeflow3').animate({
              left: "130px"
            }, 1000);
          });
          $('.smokeflow4').animate({
            left: "77px", width: "30px"
          }, 1200, function() {
            $('.smokeflow4').animate({
              left: "30px"
            }, 800, function() {

              $(".lungs").addClass("poisoned");
            });
            $('.btn-reset').css("display", "inline-block");
          });

        });
      });
    });

    $('.btn-reset').click(function () {
      $('.btn-reset').hide();
      $('.burn').hide();
      $('.tobacco').animate({
        width: "60px"
      }, 1000);
      $('.burn').css("background-color", "#EB9532");

      $(".lungs").removeClass("poisoned");
      $('.human').find('*').removeAttr('style');
      $('.btn-smoke').show();
    });
  }

  inc(){
    this.smokedSigaretsSize++;
    this.smokedSigaretsChanges.emit(this.smokedSigaretsSize);
  }

  dec(){
    this.smokedSigaretsSize--;
    this.smokedSigaretsChanges.emit(this.smokedSigaretsSize);
  }


}
