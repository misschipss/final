$("button").mouseover(function () {
    $(this).addClass("push");
  });
  $("button").mouseout(function () {
    $(this).removeClass("push");
  });
  $("button").click(function () {
    $(this).removeClass("push");
    $("#test1").text("Thanks!");
  });
  var button = document.querySelector('.black');

function setupSynth() {
  window.synth = new Tone.Synth({
    oscillator: {
      type: 'sine',
      modulationFrequency: 0.5
    },
    envelope: {
      attack: 0,
      decay: 0.2,
      sustain: 0,
      release: 0.5,
    }
  }).toMaster();
}

function boopMe() {
  if (!window.synth) {
    setupSynth();
  }
  
  window.synth.triggerAttackRelease(600, '9n');
}

button.addEventListener('touchstart', function(e) {
  e.stopPropagation();
  e.preventDefault();
  boopMe();
});
button.addEventListener('mousedown', boopMe);
function handleFormSubmit(event) {
  event.preventDefault()
  serializeForm(applicantForm)
}

function serializeForm(formNode) {
  const { elements } = formNode
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element

      return { name, value }
    })

  console.log(data)
}

const applicantForm = document.getElementById('feedform')
applicantForm.addEventListener('submit', handleFormSubmit)